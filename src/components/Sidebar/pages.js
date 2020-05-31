import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from '@material-ui/icons/ListAlt';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SettingsIcon from "@material-ui/icons/Settings";
import HttpIcon from '@material-ui/icons/Http';
import React from "react";

export default [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: <DashboardIcon />
    },
    {
        title: 'Passwords',
        href: '/passwords-list',
        icon: <ListAltIcon />
    },
    {
        title: 'Payment Cards',
        href: '/payments-cards-list',
        icon: <PaymentIcon />
    },
    {
        title: 'Bank Accounts',
        href: '/bank-accounts-list',
        icon: <AccountBalanceIcon />
    },
    {
        title: 'Web Lists',
        href: '/web-credentials-list',
        icon: <HttpIcon />
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: <SettingsIcon />
    }
];
