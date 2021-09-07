using Microsoft.EntityFrameworkCore.Migrations;

namespace Quiz.Migrations
{
    public partial class keuze4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Keuze4",
                table: "Vragen",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Keuze4",
                table: "Vragen");
        }
    }
}
