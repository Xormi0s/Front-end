using Microsoft.EntityFrameworkCore.Migrations;

namespace Quiz.Migrations
{
    public partial class dbinit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vragen",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nummer = table.Column<int>(nullable: false),
                    Keuze1 = table.Column<string>(nullable: true),
                    Keuze2 = table.Column<string>(nullable: true),
                    Keuze3 = table.Column<string>(nullable: true),
                    Antwoord = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vragen", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vragen");
        }
    }
}
