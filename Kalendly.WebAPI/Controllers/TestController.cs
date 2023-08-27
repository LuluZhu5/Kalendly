using Kalendly.WebAPI.Models;
using Kalendly.WebAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace Kalendly.WebAPI.Controllers;

[ApiController]
[Route("test")]
public class TestController : ControllerBase
{
    private readonly TestService<Account> _accountService;

    public TestController(TestService<Account> accountService) => 
        _accountService = accountService;

    [HttpGet]
    public async Task<List<Account>> Get() =>
        await _accountService.GetAsync();
}
