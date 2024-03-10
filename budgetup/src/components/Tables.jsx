import React from "react";

export const BudgetForm = () => {
  return (
    <div className="bakground-color=grey">
    <table style={{ backgroundColor: '#f2f2f2', width: '100%' }}>
      <tbody>
        <tr>
          <td>
            <label>
              Groceries:
              <input type="text" name="Groceries" />
            </label>
          </td>
          <td>
            <input type="submit" value="Submit" />
          </td>
        </tr>
        <tr>
          <td>
            <label>
             Resteraunts:
              <input type="text" name="Restaurants" />
            </label>
          </td>
          <td>
            <input type="submit" value="Submit" />
          </td>
        </tr>
        <tr>
          <td>
            <label>
            Rent/Mortgage
              <input type="text" name="Rent/Mortgage" />
            </label>
          </td>
          <td>
            <input type="submit" value="Submit" />
          </td>
        </tr>
        <tr>
          <td>
            <label>
              Debt owed:
              <input type="text" name="Debt" />
            </label>
          </td>
          <td>
            <input type="submit" value="Submit" />
          </td>
        </tr>
        <tr>
          <td>
            <label>
              Childcare: 
              <input type="text" name="Children" />
            </label>
          </td>
          <td>
            <input type="submit" value="Submit" />
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};
