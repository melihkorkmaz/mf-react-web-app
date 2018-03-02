import React from 'react';
import moment, { weekdays } from 'moment';
import 'moment-timezone';

const menufieldCommon = {
    sort : (items) => {
        return (orderKey) => {
            return items.sort((a,b) => a[orderKey] - b[orderKey]);
        }
    },

    sortDESC : (items) => {
        return (orderKey) => {
            return items.sort((a,b) => a[orderKey] - b[orderKey]).reverse();
        }
    },

    orderASC: (items) => {
        return menufieldCommon.sort(items)('order');
    },

    orderDESC: (items) => {
        return orderASC(items).reverse();
    },

    paddStringLeft: (str) => {
        return (len) => {
            return (addStr) => {
                if(str.length < len){
                    var addLength = str.length - len;
                    for(let i=0; i < addLength; i++)
                        str = addStr + str
                }

                return str;
            }
        }
    },

    workingHour: (hourItem) => {
        const dayName = hourItem.day.toUpperCase().substring(0, 3);
        const startTime = menufieldCommon.paddStringLeft(hourItem.startHour)(2)("0") + ":" + menufieldCommon.paddStringLeft(hourItem.startMinute)(2)("0") + hourItem.startPeriod;
        const endTime = menufieldCommon.paddStringLeft(hourItem.endHour)(2)("0") + ":" + menufieldCommon.paddStringLeft(hourItem.endMinute)(2)("0") + hourItem.endPeriod;

        return (
            <span>
                <span>
                    {dayName}
                </span> : {startTime} TO {endTime}
            </span>
        )
    },

    isNumber : (param) => {
        const intRegex = /^\d+$/;
        return intRegex.test(param)
    },

    multiply : x => y => x * y,
     
    nowInTimeZone : (zone) => menufieldCommon.timeInZone(zone)(moment()),

    hourByPeriod : hour => period =>  period.toLowerCase() === "am" ? hour : hour + 12,

    timeInZone : zone => date => moment(date).tz(zone),

    
    restaurantOpening : restaurant => date => {
        const timeZone = restaurant.timeZone.name;
        const weekDay = restaurant.workHours.weekDays[date.day()];
        date
            .hours(menufieldCommon.hourByPeriod(weekDay.startHour)(weekDay.startPeriod))
            .minutes(weekDay.startMinute);
            
        return menufieldCommon.timeInZone(timeZone)(date);
    },

    restaurantClosing : restaurant => date => {
        const timeZone = restaurant.timeZone.name;
        const weekDay = restaurant.workHours.weekDays[date.day()];
        date
            .hours(menufieldCommon.hourByPeriod(weekDay.endHour)(weekDay.endPeriod))
            .minutes(weekDay.endMinute);

        return menufieldCommon.timeInZone(timeZone)(date);
    },


    isRestaurantOpen : restaurant => {
        if(restaurant.status === "online")
            return true;
        else if(restaurant.status === "offline")
            return false;
        
        const timeZone = restaurant.timeZone.name;
        const userTime = menufieldCommon.nowInTimeZone(timeZone);
        return menufieldCommon.isRestaurantOpenAt(restaurant)(userTime);
    },

    isRestaurantOpenAt : restaurant => date => {
        
        const openingAt = menufieldCommon.restaurantOpening(restaurant)(moment(date)).seconds(0);
        const closingAt = menufieldCommon.restaurantClosing(restaurant)(moment(date)).seconds(0)

        return openingAt <= date && closingAt >= date;
    },

    addresComponent : items => key => {
        const item = items.find(x => x.types.indexOf(key) >= 0);
        return item ? item.short_name : "";
    },

    zip : (items) => menufieldCommon.addresComponent(items)("postal_code"),
    province : (items) => menufieldCommon.addresComponent(items)("administrative_area_level_1"),
    city : (items) => menufieldCommon.addresComponent(items)("locality"),
    route : (items) => menufieldCommon.addresComponent(items)("route"),
    streetNumber : (items) => menufieldCommon.addresComponent(items)("street_number"),
    googleAddress: (items) => {
        return {
            zip : menufieldCommon.zip(items),
            province : menufieldCommon.province(items),
            city : menufieldCommon.city(items),
            route : menufieldCommon.route(items),
            streetNumber : menufieldCommon.streetNumber(items)
        }
    }
}

const executeIfFunction = f => typeof f === 'function' ? f() : f;
const switchcaseBase = cases => defaultCase => key => key in cases ? cases[key] : defaultCase
const switchcase = cases => defaultCase => key => executeIfFunction(switchcaseBase(cases)(defaultCase)(key));

export { switchcase }
export default menufieldCommon;