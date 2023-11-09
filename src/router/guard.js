import {router} from "@/router";
import {get} from "@/api/http.js";
import {Init} from "@/api/url.js";
import store from "@/store/index.js";
import {banTypes} from "@/constant/index.js";

router.beforeEach(async (to, from, next) => {
    /*if (to.path === '/login' || to.path === '/') {
        next();
    }
    else {
        if (1) {
            next();
        } else {
            console.log('pms out');
            next('/login');
        }
    }*/
   /* if (from.path === '/'&&to.path==='/home') {
        let v = await get(sacb)
        console.log(v.data)
        store.commit('changeBT', v.data.bankType)
        switch (v.data.bankType) {
            case banTypes.tradition:
                store.commit('tra/cgInitData', v.data);
                console.log(111)
                return next({name: 'login'})
            // break;
            case banTypes.qrcode:
                store.commit('qr/cgInitData', v.data);
                console.log(to)
                return next({name: 'qr'})
        }
    }*/
    next()
})
export default router