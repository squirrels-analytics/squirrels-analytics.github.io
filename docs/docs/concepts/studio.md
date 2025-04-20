# Squirrels Studio

Squirrels Studio is the web-based interface for managing and exploring your Squirrels project. It is a front-end application with a "bring your own backend" architecture. This means that regardless of whether your Squirrels server is running on localhost or on a remote server (such as a cloud service like AWS), you can connect to it using Squirrels Studio.

The main page of Squirrels Studio can be found here:

https://squirrels-analytics.github.io/squirrels-studio

This is where you can provide the configuration of the Squirrels server to connect to.

![Squirrels Studio Root Page](/img/squirrels-studio-root.png)

## Login Page

You are directed to the login page after connecting to your Squirrels server.

The page URL contains the "host", "projectName", and "projectVersion" as query parameters.

![Squirrels Studio Login Page](/img/squirrels-studio-login.png)

:::note

When you run [sqrl run] in the terminal, the "Application UI" link will take you directly to this page.

:::

You can view the API documentation through the buttons "ReDoc API Docs" and "Swagger API Docs". The "Swagger API Docs" also allows you to test the API calls.

You can also interact with the Squirrels project from the UI by logging in or clicking "Explore as Guest".
- The "Explore as Guest" option only allows you to view public datasets and dashboards.
- When logged in as a non-admin user, you will also be able to view protected datasets and dashboards, and modify user settings (such as changing your password and creating access tokens).
- When logged in as an admin user, you will be able to view all datasets and dashboards, view data lineage, query data models, modify user settings, and manage users (such as create users, delete users, and modify user fields and permissions).

## Explorer Page

Once logged in or exploring as guest, the explorer page provides the following ways to interact with your Squirrels project:
- **Explore datasets** - View and query datasets you have access to.
- **Explore dashboards** - View and run dashboards you have access to.
- **View data lineage** - Requires admin permissions. View the data lineage of all data assets across your Squirrels project.
- **Query data models** - Requires admin permissions. Query the intermediate data models.

![Squirrels Studio Explorer Page](/img/squirrels-studio-explorer.gif)

## User Settings Page

The user settings page allows you to change your password and create access tokens. 

Navigate to "Menu" -> "User Settings" to access this page.

![Squirrels Studio User Settings Page](/img/squirrels-studio-user-settings.gif)

Access tokens can be used to authenticate as the user when making API requests from other applications.

## Users Management Page

The users management page allows you to manage users in your Squirrels project. 

Navigate to "Menu" -> "Manage Users" to access this page. **You must be authenticated as an admin user to find this option.** 

![Squirrels Studio Users Management Page](/img/squirrels-studio-manage-users.gif)

The following rules apply when managing users:
- You cannot delete your own user account.
- You cannot delete the user "admin".
- You cannot change the user "admin" to be a non-admin user.


[sqrl run]: ../../references/cli/run
