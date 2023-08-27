using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Kalendly.WebAPI.Models;

public class Booking : ICollections
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
}