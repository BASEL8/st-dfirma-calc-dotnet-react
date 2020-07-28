using System;
using System.Collections.Generic;

namespace newapp.Models
{
  public class Extra

  {
    public string Name { get; set; }
    public int Price { get; set; }
    public int Id { get; set; }
  }

  public class Cities
  {
    public string Name { get; set; }
    public int Id { get; set; }
    public int pricePerSquareMeter { get; set; }
    public IList<Extra> Extra { get; set; }
  }
  public class CalacRequest
  {
    public int cityId { get; set; }
    public int area { get; set; }
    public IList<int> extra { get; set; }
  }
}
