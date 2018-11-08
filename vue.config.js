module.exports = {
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  outputDir: 'server/dist',
  devServer: {
    proxy: 'http://localhost:4000'
  }
}