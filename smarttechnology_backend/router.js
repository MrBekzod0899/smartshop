const {Router}=require('express')
const router=Router()
const auth=require('./middleware/auth')
const pagerouter=require('./router/page')
const settings=require('./router/settings')
const product=require('./router/product')
const faqs=require('./router/faqs')
const attribute=require('./router/attribute')
const category=require('./router/category')
const user=require('./router/user')
const apirouter=require('./router/api')
const sliderrouter=require('./router/slider')

router.use('/',pagerouter)
router.use('/api',apirouter)
router.use('/category',category)
router.use('/attribute',attribute)
router.use('/settings',settings)
router.use('/faqs',faqs)
router.use('/product',product)
router.use('/user',user)
router.use('/slider',sliderrouter)

module.exports=router