using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Kalendly.WebAPI.Models;

public class Account : ICollections
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("userId")]
    [BsonRepresentation(BsonType.ObjectId)]
    public string UserId { get; set; } = null!;

    [BsonElement("type")]
    public string Type { get; set; } = null!;

    [BsonElement("provider")]
    public string Provider { get; set; } = null!;
    
    [BsonElement("providerAccountId")]
    public string ProviderAccountId { get; set; } = null!;
    
    [BsonElement("refresh_token")]
    [BsonRepresentation(BsonType.String)]
    public string? RefreshToken { get; set; }
    
    [BsonElement("access_token")]
    [BsonRepresentation(BsonType.String)]
    public string? AccessToken { get; set; }
    
    [BsonElement("expires_at")]
    public int? ExpiresAt { get; set; }

    [BsonElement("token_type")]
    public string? TokenType { get; set; }

    [BsonElement("scope")]
    public string? Scope { get; set; }

    [BsonElement("id_token")]
    [BsonRepresentation(BsonType.String)]
    public string? IdToken { get; set; }

    [BsonElement("session_state")]
    public string? SessionState { get; set; }
}
