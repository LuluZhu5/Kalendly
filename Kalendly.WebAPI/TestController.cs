using Microsoft.AspNetCore.Mvc;

namespace Kalendly.WebAPI.Controllers;

[ApiController]
[Route("test")]
public class TestController : ControllerBase
{
    [HttpGet]
    public string Get() {
        return "Works fine.";
    }
}
