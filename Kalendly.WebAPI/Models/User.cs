using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Kalendly.WebAPI.Models;

public class User : ICollections
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    
    [BsonElement("name")]
    public string? Name { get; set; }

    [BsonElement("email")]
    public string? Email { get; set; }

    [BsonElement("emailVerified")]
    public DateTime? EmailVerified { get; set; }

    [BsonElement("image")]
    public string? Image { get; set; }

    [BsonElement("hashedPassword")]
    public string? HashedPassword { get; set; }

    [BsonElement("createdAt")]
    public DateTime CreatedAt { get; set; } = DateTime.Now;

    [BsonElement("updatedAt")]
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    [BsonElement("bookings")]
    public Booking[] Bookings { get; set; } = null!;

    [BsonElement("openDays")]
    public bool[] OpenDays { get; set; } = null!;

    [BsonElement("openHours")]
    public string[] OpenHours { get; set; } = null!;

    [BsonElement("accounts")]
    public Account[] Accounts { get; set; } = null!;
}
