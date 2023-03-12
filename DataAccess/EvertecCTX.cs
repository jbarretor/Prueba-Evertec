using DataAccess.Entity;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public partial class EvertecCTX : DbContext
    {
        public EvertecCTX()
        {
        }

        public EvertecCTX(DbContextOptions<EvertecCTX> options)
            : base(options)
        {
        }

        public virtual DbSet<PersonInformation> personInformation { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Integrated Security=true;Database=Evertec;");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PersonInformation>(entity =>
            {
                entity.ToTable("PersonInformation");

                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Birth).HasColumnType("date");
                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
                entity.Property(e => e.Photo).IsUnicode(false).HasColumnType("image");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}