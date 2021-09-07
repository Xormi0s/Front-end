﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Quiz;

namespace Quiz.Migrations
{
    [DbContext(typeof(QuizContext))]
    partial class QuizContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Quiz.Models.Vragen", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Antwoord")
                        .HasColumnType("int");

                    b.Property<string>("Keuze1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Keuze2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Keuze3")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Keuze4")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Nummer")
                        .HasColumnType("int");

                    b.Property<string>("Vraag")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Vragen");
                });
#pragma warning restore 612, 618
        }
    }
}
