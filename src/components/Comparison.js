import React, { Component } from 'react'

export default class Comparison extends Component {
    render() {
        return (
            <section className="content">
 <h3>Comparison</h3>
 <hr></hr>

 <p>This section will compare building data analytics in a web based approach vs bi tools.</p>

 <div className="columns">
     <div className="column">
         <article className="content">
         <h6>Web Based Analytics</h6>
             <ul>
                 <li>Reliant on users browser, typically involves API calls and browser/client-side rendering.</li>
                 <li>No license fees, use of open source libraries, cost effective.</li>
                 <li>Large amount of flexibility in visualization, there are dozens of free frameworks.</li>
                 <li>Requires programming knowledge</li>
                 <li>Code becomes resuable and scalable</li>
                 <li>Unlimited design flexibility, with availability of CSS/HTML</li>
             </ul>
         </article>
     </div>
     <div className="column">
         <article className="content">
             <h6>Business Intelligence Tools</h6>
             <ul>
                 <li>Can have costly license fees</li>
                 <li>Does not require much programming knowledge</li>
                 <li>Solutions are not reusable and have to be rebuilt</li>
                 <li>Integration with wider range of data sources</li>
                 <li>Limited in design flexibility by the software</li>
             </ul>
         </article>
     </div>
 
 </div>
</section>
        )
    }
}

 