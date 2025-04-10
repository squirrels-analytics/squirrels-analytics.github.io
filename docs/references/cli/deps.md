# sqrl deps

The `deps` command loads all packages specified in the `squirrels.yml` file from their Git repositories.

## Usage

```bash
sqrl deps
```

## Description

This command:
1. Reads the `packages` section from your `squirrels.yml` file
2. Downloads each package from its Git repository
3. Stores the packages in the `sqrl_packages` directory
4. Makes the packages available for use in your project

## Package Configuration

Packages are configured in the `squirrels.yml` file under the `packages` section. Each package should specify:

```yaml
packages:
  - git: https://github.com/owner/repo.git
    revision: v1.0.0  # Optional: tag, branch, or commit hash
    directory: custom_name  # Optional: custom directory name
```

## Examples

Load all packages specified in squirrels.yml:

```bash
sqrl deps
```

## Notes

- Packages are downloaded into the `sqrl_packages` directory
- The `sqrl_packages` directory should be added to `.gitignore`
- Each package must be a valid Git repository
- If no revision is specified, the default branch will be used
- The directory name defaults to the repository name if not specified
- Packages can be used to share common macros or Python functions across projects 