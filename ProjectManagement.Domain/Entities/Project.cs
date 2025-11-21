namespace ProjectManagement.Domain.Entities;

public class Project
{
    public int ProjectId { get; private set; }
    public string ProjectName { get; private set; }
    public string? Description { get; private set; }
    public bool IsActive { get; private set; }

    public Project(string name, string? description = null)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentException("Project name cannot be empty.");

        ProjectName = name;
        Description = description;
        IsActive = true;
    }

    public void Toogle()
    {
        IsActive = !IsActive;
    }

    public void UpdateDescription(string? description)
    {
        Description = description;
    }

    public void UpdateName(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentException("Project name cannot be empty.");

        ProjectName = name;
    }
}
