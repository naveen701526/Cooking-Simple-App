import React from 'react';

const RecipeContent = () => {
  return (
    <section className='recipe-content'>
      <article>
        <h4>instructions</h4>

        <div className='single-instruction'>
          <header>
            <p>step 1</p>
            <div></div>
          </header>
          <p>
            I'm baby mustache man braid fingerstache small batch venmo
            succulents shoreditch.
          </p>
        </div>

        <div className='single-instruction'>
          <header>
            <p>step 2</p>
            <div></div>
          </header>
          <p>
            Pabst pitchfork you probably haven't heard of them, asymmetrical
            seitan tousled succulents wolf banh mi man bun bespoke selfies
            freegan ethical hexagon.
          </p>
        </div>

        <div className='single-instruction'>
          <header>
            <p>step 3</p>
            <div></div>
          </header>
          <p>
            Polaroid iPhone bitters chambray. Cornhole swag kombucha live-edge.
          </p>
        </div>
      </article>
      <article className='second-column'>
        <div>
          <h4>ingredients</h4>
          <p className='single-ingredient'>1 1/2 cups dry pancake mix</p>
          <p className='single-ingredient'>1/2 cup flax seed meal</p>
          <p className='single-ingredient'>1 cup skim milk</p>
        </div>
        <div>
          <h4>tools</h4>
          <p className='single-tool'>Hand Blender</p>
          <p className='single-tool'>Large Heavy Pot With Lid</p>
          <p className='single-tool'>Measuring Spoons</p>
          <p className='single-tool'>Measuring Cups</p>
        </div>
      </article>
    </section>
  );
};

export default RecipeContent;
