using Kalendly.WebAPI.Models;
using Kalendly.WebAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<TestDatabaseSettings>(
    builder.Configuration.GetSection("TestDatabase"));

builder.Services.AddSingleton<TestService<User>>();
builder.Services.AddSingleton<TestService<Account>>();
builder.Services.AddSingleton<TestService<Booking>>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
