import React from "react";

const jumbotron = () => {
  return (
    <div class="jumbotron m-2">
      <h1 class="display-4">Hello, world!</h1>
      <p class="p-3 mb-2 bg-secondary text-white">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default jumbotron;
