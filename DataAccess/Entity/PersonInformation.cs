namespace DataAccess.Entity;

public partial class PersonInformation
{
    public int Id { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public DateTime Birth { get; set; }

    public string Photo { get; set; } = null!;

    public int MaritalStatus { get; set; }

    public bool HasSiblings { get; set; }
}
