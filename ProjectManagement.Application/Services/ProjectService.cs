using ProjectManagement.Domain.Entities;
using ProjectManagement.Domain.Interfaces;

public class ProjectService
{
    private readonly IProjectRepository _projectRepository;

    public ProjectService(IProjectRepository projectRepository)
    {
        _projectRepository = projectRepository;
    }

    //Fetch All Projects
    public async Task<IEnumerable<Project>> GetAllProjectsAsync()
    {
        return await _projectRepository.GetAllProjectsAsync();
    }

    //Fetch Project By Id
    public async Task<Project?> GetProjectByIdAsync(int projectId)
    {
        return await _projectRepository.GetProjectByIdAsync(projectId);
    }

    //Add New Project
    public async Task AddProjectAsync(string name, string? description = null)
    {
        var project = new Project(name, description);
        await _projectRepository.AddProjectAsync(project);
    }

    //Update Existing Project
    public async Task UpdateProjectAsync(int projectId, string name, string? description = null)
    {
        var project = await _projectRepository.GetProjectByIdAsync(projectId);
        if (project != null)
        {
            project.UpdateName(name);
            project.UpdateDescription(description);
            await _projectRepository.UpdateProjectAsync(project);
        }
    }

    //Delete Project
    public async Task DeleteProjectAsync(int projectId)
    {
        await _projectRepository.DeleteProjectAsync(projectId);
    }

    //Toggle Project Status
    public async Task ToggleProjectStatusAsync(int projectId)
    {
        var success = await _projectRepository.ToggleProjectStatusAsync(projectId);

        if (!success)
        {
            throw new Exception($"Project with ID {projectId} not found or cannot be toggled.");
        }
    }
}