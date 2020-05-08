using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Zadanie8alt.Pages.Models;

    public class MyDB : DbContext
    {
        public MyDB (DbContextOptions<MyDB> options)
            : base(options)
        {
        }

        public DbSet<Zadanie8alt.Pages.Models.Movie> Movie { get; set; }
    }
