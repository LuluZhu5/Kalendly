using Kalendly.WebAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Kalendly.WebAPI.Services;

public class TestService<T> where T : ICollections
{
    private readonly IMongoCollection<T> _testCollection;

    public TestService(
        IOptions<TestDatabaseSettings> TestDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            TestDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            TestDatabaseSettings.Value.DatabaseName);

        string collectionName;
        if (typeof(T) == typeof(User)) {
            collectionName = TestDatabaseSettings.Value.UserCollectionName;
        } else if (typeof(T) == typeof(Account)) {
            collectionName = TestDatabaseSettings.Value.AccountCollectionName;
        } else if (typeof(T) == typeof(Booking)) {
            collectionName = TestDatabaseSettings.Value.BookingCollectionName;
        } else {
            // Error
            collectionName = "Error";
        }

        _testCollection = mongoDatabase.GetCollection<T>(collectionName);
    }

    public async Task<List<T>> GetAsync() =>
        await _testCollection.Find(_ => true).ToListAsync();

    public async Task<T?> GetAsync(string id) =>
        await _testCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(T newT) =>
        await _testCollection.InsertOneAsync(newT);

    public async Task UpdateAsync(string id, T updatedT) =>
        await _testCollection.ReplaceOneAsync(x => x.Id == id, updatedT);

    public async Task RemoveAsync(string id) =>
        await _testCollection.DeleteOneAsync(x => x.Id == id);
}
