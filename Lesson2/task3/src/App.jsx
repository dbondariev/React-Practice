import React from 'react';
import './index.scss';

const App = () => {
  return <div>{ <main class="page">
  <form className="login-form">
    <h1 className="form-title">Profile</h1>
    <div className="form-control">
      <label className="form-label" htmlFor="name">Name</label>
      <input className="form-input" type="text" id="name" name="name" value="anonymous" />
    </div>
    <div className="form-control">
      <label className="form-label" id="age" htmlFor="age">Age</label>
      <input className="form-input" type="number" value="17" name="age" />
      <span style="color: red; font-weight: 700">To young</span>
    </div>
    <button className="submit-button" type="submit">Submit</button>
  </form>
</main>}
</div>;
};

export default App;


{/* <main class="page">
  <form class="login-form">
    <h1 class="form-title">Profile</h1>
    <div class="form-control">
      <label class="form-label" for="name">Name</label>
      <input class="form-input" type="text" id="name" name="name" value="anonymous" />
    </div>
    <div class="form-control">
      <label class="form-label" id="age" for="age">Age</label>
      <input class="form-input" type="number" value="17" name="age" />
      <span style="color: red; font-weight: 700">To young</span>
    </div>
    <button class="submit-button" type="submit">Submit</button>
  </form>
</main> */}
