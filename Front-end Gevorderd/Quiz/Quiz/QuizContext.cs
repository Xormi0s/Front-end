using Microsoft.EntityFrameworkCore;
using Quiz.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz
{
    public class QuizContext : DbContext
    {
        public QuizContext()
        {
        }

        public QuizContext(DbContextOptions options)
            : base(options)
        {

        }
        public DbSet<Vragen> Vragen { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
