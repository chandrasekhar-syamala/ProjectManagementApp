using Microsoft.AspNetCore.Mvc;
using ProjectManagement.Application.Services;
using ProjectManagement.Domain.Entities;
using ProjectManagement.Server.Models;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly ProjectService _projectService;

    public ProjectsController(ProjectService projectService)
    {
        _projectService = projectService;
    }

    //GET: api/Projects
    [HttpGet]
    public async Task<IActionResult> GetAllProjects()
    {
        var projects = await _projectService.GetAllProjectsAsync();
        return Ok(projects);
    }

    //POST: api/Projects
    [HttpPost]
    public async Task<IActionResult> AddProject([FromBody] AddOrUpdateProjectRequest project)
    {
        await _projectService.AddProjectAsync(project.Name, project.Description);
        return Ok(new { Message = "Project added successfully." });
    }

    //PATCH: api/Projects/{projectId}/toggle-status
    [HttpPatch("{projectId}/toggle-status")]
    public async Task<IActionResult> ToggleProjectStatus(int projectId)
    {
        try
        {
            await _projectService.ToggleProjectStatusAsync(projectId);
            return Ok(new { Message = "Project status toggled successfully." });
        }
        catch (Exception ex)
        {
            return NotFound(new { Message = ex.Message });
        }
    }

    //GET: api/Projects/{projectId}
    [HttpGet("{projectId}")]
    public async Task<IActionResult> GetProjectById(int projectId)
    {
        var project = await _projectService.GetProjectByIdAsync(projectId);
        if (project == null)
        {
            return NotFound();
        }
        return Ok(project);
    }

    //PUT: api/Projects/{projectId}
    [HttpPut("{projectId}")]
    public async Task<IActionResult> UpdateProject(int projectId, [FromBody] AddOrUpdateProjectRequest project)
    {
        await _projectService.UpdateProjectAsync(projectId, project.Name, project.Description);
        return Ok(new { Message = "Project updated successfully." });
    }

    //DELETE: api/Projects/{projectId}
    [HttpDelete("{projectId}")]
    public async Task<IActionResult> DeleteProject(int projectId)
    {
        await _projectService.DeleteProjectAsync(projectId);
        return Ok(new { Message = "Project deleted successfully." });
    }



}