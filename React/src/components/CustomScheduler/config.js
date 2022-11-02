import { resources } from "../../data";

export const currentDate = new Date(2022, 9, 1);

export const resourcesData = [{
    fieldExpr: "humanId", dataSource: resources, label: "Employee"
}];

export const scrolling = {mode: "virtual"};

export const groups = ["humanId"];

export const startDayHour = 8;

export const endDayHour = 20;

export const views = [{
    type: "month", groupOrientation: "horizontal"
}];