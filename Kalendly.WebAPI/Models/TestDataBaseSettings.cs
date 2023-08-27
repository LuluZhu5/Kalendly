namespace Kalendly.WebAPI.Models;

public class TestDatabaseSettings
{   
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string AccountCollectionName { get; set; } = null!;

    public string BookingCollectionName { get; set; } = null!;

    public string UserCollectionName { get; set; } = null!;
}
