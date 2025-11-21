using Microsoft.EntityFrameworkCore;
using ProjectManagement.Domain.Entities;
using ProjectManagement.Domain.Interfaces;
namespace ProjectManagement.Infrastructure;

public class ProjectRepository : IProjectRepository
{
    private readonly AppDbContext _dbContext;

    public ProjectRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    //Fetch All Projects
    public async Task<IEnumerable<Project>> GetAllProjectsAsync()
    {
        return await _dbContext.Projects.ToListAsync();
    }

    //Fetch Project By Id
    public async Task<Project?> GetProjectByIdAsync(int projectId)
    {
        return await _dbContext.Projects
            .FirstOrDefaultAsync(p => p.ProjectId == projectId);
    }

    //Add New Project
    public async Task AddProjectAsync(Project project)
    {
        await _dbContext.Projects.AddAsync(project);
        await _dbContext.SaveChangesAsync();
    }

    //Update Existing Project
    public async Task UpdateProjectAsync(Project project)
    {
        await _dbContext.Projects.Update(project);
        await _dbContext.SaveChangesAsync();
    }

    //Delete Project
    public async Task DeleteProjectAsync(int projectId)
    {
        var project = await _dbContext.Projects.FindAsync(projectId);
        if (project != null)
        {
            _dbContext.Projects.Remove(project);
            await _dbContext.SaveChangesAsync();
        }
    }

    //Toggle Project Status
    public async Task<bool> ToggleProjectStatusAsync(int projectId)
    {
        var project = await _context.Projects.FindAsync(projectId);
        if (project == null)
        {
            return false;
        }

        project.Toogle();
        _dbContext.Projects.Update(project);
        await _dbContext.SaveChangesAsync();

        return true;
    }
}