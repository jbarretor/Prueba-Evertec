namespace Models.Request
{
    public class PersonalInfoRequest
    {
        public int Id { get; set; }

        public string FirstName { get; set; } = null!;

        public string LastName { get; set; } = null!;

        public DateTime Birth { get; set; }

        public string Photo { get; set; } = null!;

        public int MaritalStatus { get; set; }

        public bool HasSiblings { get; set; }
    }
}
