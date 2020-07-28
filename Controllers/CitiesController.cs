using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using newapp.Models;

namespace newapp.Controllers
{
  [Route("api/")]
  [ApiController]
  public class CitiesController : Controller

  {
    static List<Extra> StockholmeExtra = new List<Extra>() {
            new Extra(){ Price=300,Name="Fönsterputs",Id=0},
            new Extra(){ Price=150,Name="Balkongstädning",Id=1},
        };
    static List<Extra> UppsalaExtra = new List<Extra>() {
            new Extra(){ Price=300,Name="Fönsterputs",Id=0},
            new Extra(){ Price=150,Name="Balkongstädning",Id=1},
            new Extra(){ Price=400,Name="Bortforsling av skräp",Id=2},
        };
    static List<Cities> cities = new List<Cities>()
        {
         new Cities(){ Id = 0 , Name="Stockholm" , pricePerSquareMeter=65 , Extra=StockholmeExtra},
         new Cities(){ Id = 1 , Name="Uppsala" , pricePerSquareMeter=55 , Extra=UppsalaExtra}
         };
    [HttpGet]
    public List<Cities> Get()
    {
      var cities_ = new List<Cities>();
      for (int i = 0; i < cities.Count; i++)
      {
        var extra_ = new List<Extra>();

        for (int x = 0; x < cities[i].Extra.Count; x++)
        {
          extra_.Add(new Extra() { Name = cities[i].Extra[x].Name, Id = cities[i].Extra[x].Id });
        }
        cities_.Add(new Cities() { Id = cities[i].Id, Name = cities[i].Name, Extra = extra_ });
      }
      return cities_;
    }
    [HttpPost]
    public int Post([FromBody] CalacRequest data)
    {
      int totalPrice = 0;
      int extraPrice = 0;
      var result = cities.Find(x => x.Id == data.cityId);
      totalPrice = result.pricePerSquareMeter * data.area;
      if (data.extra != null)
        for (int i = 0; i < data.extra.Count; i++)
        {
          for (int x = 0; x < result.Extra.Count; x++)
          {
            if (data.extra[i] == result.Extra[x].Id)
            {
              extraPrice += result.Extra[x].Price;
            }
          }
        }
      Console.WriteLine(data);
      totalPrice += extraPrice;
      return totalPrice;
    }
  }
}
