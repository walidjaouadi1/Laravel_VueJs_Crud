import { createRouter, createWebHistory } from "vue-router";

import CompaniesCreate from "../components/companies/companiescreate.vue";
import CompaniesIndex from "../components/companies/companiesindex.vue";
import CompaniesEdit from "../components/companies/companiesedit.vue";

const routes = [
    {
        path: "/",
        name: "companies.index",
        component: CompaniesIndex,
    },
    {
        path: "/companies/create",
        name: "companies.create",
        component: CompaniesCreate,
    },
    {
        path: "/companies/:id/edit",
        name: "companies.edit",
        component: CompaniesEdit,
        props: true,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
