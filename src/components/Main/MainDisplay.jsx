import React from 'react';


export const MainDisplay = ({user, fetched, isCheckingOut})=>(
    <div>
        {fetched ? <div>
                USER NAME - {user.name}
                {console.log(user.name)}
        </div> :
        <div>
            Please wait...
        </div>
    }
    </div>
);