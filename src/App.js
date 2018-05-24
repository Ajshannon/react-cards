import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */

const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const Card = (props) => (
    
    <div className="card cardGroup__card">
            <div className="card__description cardGroup__cardDescription">
                <div className={`icon fa ${props.icon} card__descriptionIcon`} />
                <div className="card__descriptionText">
                    {props.description}
                    <br/>
                    {props.hint && <React.Fragment><br/>({props.hint})</React.Fragment>}
                </div>
            </div>
            <div className="card__price">{props.price}</div>
        </div>
);

const App = () => (
    <CardGroup>
        <Card description="Trial" icon="fa-thumbs-o-up" hint="" price="Free!"></Card>
        <Card description="Basic tier" icon="fa-trophy" hint="(most popular)" price="$10.00"></Card>
        <Card description="Advanced tier" icon="fa-bolt" hint="(only for enterprise-level professionals)" price="$6,000.00"></Card>
    </CardGroup>
);

{/* <div className="cardGroup">
        <div className="card cardGroup__card">
            <div className="card__description cardGroup__cardDescription">
                <div className="icon fa fa-thumbs-o-up card__descriptionIcon" />
                <div className="card__descriptionText">
                    Trial
                </div>
            </div>
            <div className="card__price">Free!</div>
        </div>
        <div className="card cardGroup__card">
            <div className="card__description cardGroup__cardDescription">
                <div className="icon fa fa-trophy card__descriptionIcon" />
                <div className="card__descriptionText">
                    Basic tier
                    <br/>
                    (most popular)
                </div>
            </div>
            <div className="card__price">$10.00</div>
        </div>
        <div className="card cardGroup__card">
            <div className="card__description cardGroup__cardDescription">
                <div className="icon fa fa-bolt card__descriptionIcon" />
                <div className="card__descriptionText">
                    Advanced tier
                    <br/>
                    (only for enterprise-level professionals)
                </div>
            </div>
            <div className="card__price">$6,000.00</div>
        </div>
    </div> */}

export default App;
