import EmployeeController from "../controllers/employees.controller";

let req, res;

describe("EmployeeController : Add New Employee", () => {
  it("Create Employee throws error if no first_name in request body", () => {
    req = {
      body: {
        last_name: "Mike",
        age: 12,
      },
    };
    res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    EmployeeController.createEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("Create Employee throws error if no last_name in request body", () => {
    req = {
      body: {
        first_name: "Mike",
        age: 12,
      },
    };
    res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    EmployeeController.createEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("Create Employee throws error if no age in request body", () => {
    req = {
      body: {
        first_name: "Mike",
        last_name: "Tyson",
      },
    };
    res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    EmployeeController.createEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("Create Employee success if the request body is correct", async () => {
    req = {
      body: {
        first_name: "Mike",
        last_name: "Tyson",
        age: 35,
      },
    };
    res = {
      send: jest.fn(),
    };

    await EmployeeController.createEmployee(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
  });
});

describe("EmployeeController : Get All Employees", () => {
  it("Get All Employees should return", async () => {
    req;
    res = {
      send: jest.fn(),
    };

    await EmployeeController.getAllEmployees(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
  });
});

describe("EmployeeController : Get Employee By Id", () => {
  it("Get Employee by ID should return the employee", async () => {
    req = {
      params: {
        id: 1,
      },
    };
    res = {
      send: jest.fn(),
    };

    await EmployeeController.getEmployeeById(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it("Get Employee by ID throws error when the employee id not available", async () => {
    req = {
      params: {
        id: 999999999,
      },
    };
    res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await EmployeeController.getEmployeeById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe("EmployeeController : Update Employee", () => {
  it("Update employee should success if the correspendant id is available", async () => {
    req = {
      body: {
        id: 2,
        first_name: "Mike",
      },
    };
    res = {
      send: jest.fn(),
    };

    await EmployeeController.updateEmployee(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it("Update employee throws error when the employee id is not available is not available", async () => {
    req = { body: { first_name: "Mike" } };
    res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await EmployeeController.updateEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});

describe("EmployeeController : Delete Employee", () => {
  it("Delete employee should success if the correspendant id is available", async () => {
    req = {
      params: {
        id: 3,
      },
    };
    res = {
      send: jest.fn(),
    };

    await EmployeeController.deleteEmployee(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it("Delete employee throws error when the employee id is not available is not available", async () => {
    req = { params: {} };
    res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await EmployeeController.deleteEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
