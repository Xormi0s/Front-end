using Microsoft.EntityFrameworkCore.Migrations;

namespace Quiz.Migrations
{
    public partial class VraagUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Vraag",
                table: "Vragen",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Vraag",
                table: "Vragen");
        }
    }
}
