import React from "react";
import data from './db.json';
import Fetchjsondata from "./table";

function agevalue(){
    return(
        <div>
                var diff_ms = Date.now() - users.age.getTime();
                var age_dt = new Date(diff_ms); 
              
                return Math.abs(age_dt.getUTCFullYear() - 1970);
        </div>
    );
}