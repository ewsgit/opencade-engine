import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import * as path from "path";

export default defineConfig({
                              main: {
                                build: {
                                  rollupOptions: {
                                    input: {
                                      index: path.resolve(__dirname, 'src/editor/main/index.ts')
                                    }
                                  }
                                },
                                  plugins: [ externalizeDepsPlugin() ]
                              },
                              preload: {
                                build: {
                                  rollupOptions: {
                                    input: {
                                      index: path.resolve(__dirname, 'src/editor/preload/index.ts')
                                    }
                                  }
                                }
                              },
                              renderer: {
                                root: path.resolve(__dirname, 'src/editor/renderer/'),
                                build: {
                                  rollupOptions: {
                                    input: {
                                      index: path.resolve(__dirname, 'src/editor/renderer/index.html')
                                    }
                                  }
                                },
                                plugins: [ externalizeDepsPlugin() ]
                              }
                            })
