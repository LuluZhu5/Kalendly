using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Kalendly.WebAPI.Models;

public class Booking : ICollections
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("uid")]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Uid { get; set; } = null!;
    
    [BsonElement("title")]
    public string Title { get; set; } = null!;

    [BsonElement("description")]
    public string? Description { get; set; }

    [BsonElement("startTime")]
    public DateTime StartTime { get; set; } = DateTime.MinValue;

    [BsonElement("endTime")]
    public DateTime EndTime { get; set; } = DateTime.MaxValue;

    [BsonElement("location")]
    public string? Location { get; set; }

    [BsonElement("createdAt")]
    public DateTime CreatedAt { get; set; } = DateTime.Now;

    [BsonElement("updatedAt")]
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}
