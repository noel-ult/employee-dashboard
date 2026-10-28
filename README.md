# Employee dashboard

A React and Bootstrap learning app with a dashboard and an add-employee form. It combines sample users from JSONPlaceholder with employees created locally in the browser.

## Run and build

```sh
npm ci
npm start
```

Open http://localhost:3000. Build static output with `npm run build`; output is in `build/`. There is no application backend or required environment configuration.

## Pages and data flow

- `/`: `src/components/Dashboard.js` fetches remote sample users and appends local records.
- `/employee-form`: `EmployeeForm.js` collects name, designation, location, and salary, then returns to the dashboard.
- `src/App.js` owns local state and reads/writes the `employees` localStorage key.

The dashboard displays ID, name, and email. Local emails are generated from names; designation, location, and salary are not shown in the table. Browser storage is local to that browser and origin, with no account synchronization. The startup read and write effects can overwrite stored values during mounting; persistence across reloads needs explicit verification rather than assuming a database guarantee.

## Checks and deployment

Manually check remote loading, a failed network request, adding an employee, and reload persistence. A test runner is configured by Create React App, but no application test files are tracked. `npm run eject` is an irreversible framework migration and is not part of normal setup.

Serve `build/` on a static host with all application routes falling back to `index.html`, so directly visiting `/employee-form` works. External sample-user loading requires network access.

## More documentation

- [Source, command, and configuration reference](docs/REFERENCE.md)
- [Contributing](CONTRIBUTING.md)

<!-- developer-handbook-20261028 -->
[Source reference](docs/REFERENCE.md) · [Verification and operations](docs/OPERATIONS.md)
<!-- /developer-handbook-20261028 -->
