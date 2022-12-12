import logo from "./logo.svg";
import "./App.css";
import { Dropdown } from "bootstrap";

function App() {
  return (
    <div className="App">
      <div>
        <table>
          <caption>a test table with merged cells</caption>

          <tr>
            <th rowSpan={2}></th>

            <th colSpan={2}>Average</th>
            <th rowSpan={2}>Red eyes</th>
          </tr>

          <tr>
            <th>height</th>
            <th>weight</th>
          </tr>
          <tr>
            <th>males</th>
            <td>12</td>
            <td>123</td>
            <td>23</td>
          </tr>
          <tr>
            <th>females</th>
            <td>12</td>
            <td>23</td>
            <td>123</td>
          </tr>
        </table>
      </div>
      <div>
        <form action=''>
          <label>stdent name</label>
          <input />
          <br />
          <label>addmin no</label>
          <input />
          <br />
          <label>reg no</label>
          <input />
          <br />
          <select>
            <option>15</option>
            <option>20</option>
            <option>23</option>
          </select>
          <br />
          <input name="male" value="male" id="male" type="radio" />
          <label for="male">male</label>
          <input name="male" value="male" id="female" type="radio"></input>
          <label for="female">female</label> <br />
          <input type="submit"  />
          <br />
        </form>
      </div>
    </div>
  );
}

export default App;
