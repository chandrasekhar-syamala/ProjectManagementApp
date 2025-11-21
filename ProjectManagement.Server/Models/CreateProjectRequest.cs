using System.ComponentModel.DataAnnotations;

namespace ProjectManagement.Server.Models;

public class AddOrUpdateProjectRequest
{
    [Required]
    [MinLength(1)]
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
}
