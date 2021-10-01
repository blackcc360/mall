module.exports={
  // 配置路径别名
  configureWebpack:{ //表示开始对webpack的config进行配置
    resolve:{//配置路径相关
      // extensions:[],//可以设置文件的后缀名，后续可以简略，已默认配置
      alias:{//配置别名
        // '@':'src'//系统已默认配置src别名
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'views':'@/views',

      }
    }
  }
}