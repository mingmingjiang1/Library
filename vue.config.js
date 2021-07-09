/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-05 21:50:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-06 10:09:16
 */

const webpack = require("webpack")
module.exports = {
    lintOnSave: false,
    
	configureWebpack: {
		plugins: [
			// 配置 jQuery 插件的参数
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
				Popper: ['popper.js', 'default']
			})
		]
	},
    devServer: {
        proxy: {
            '/api': {
                target: 'http://111.229.37.167',
                changeOrigin:true
            }
        }
    },
    configureWebpack: {
        resolve: {
          alias: {
            "assets": "@/assets",
            "common": "@/common",
            "components": "@/components",
            "network": "@/network",
            "views": "@/views",
          }
        }
      }
}

