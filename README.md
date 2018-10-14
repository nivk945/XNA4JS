# XNA4JS
本项目的目标是 XNA Framework 4.0 到 JavaScript 的移植实现。  
XNA Framework 4.0 是微软基于 .Net 制作的一套跨平台游戏框架。  
本项目继承自 XNA 4.0 版本 API 及其部分实现衍生而来。  
您可简单方便的将原有基于 XNA 4.0 的游戏移植到本项目中运行，也可在本项目基础上重新开发属于您的游戏。  


## 当前进度

已实现：  

Microsoft.Xna.Framework  
 * BoundingBox  
 * BoundingFrustum  
 * BoundingSphere  
 * Color  
 * ContainmentType  
 * Curve  
 * CurveContinuity  
 * CurveKey  
 * CurveKeyCollection  
 * CurveLoopType  
 * CurveTangent  
 * DisplayOrientation  
 * FrameworkDispatcher  
 * MathHelper  
 * Matrix  
 * Plane  
 * PlaneIntersectionType  
 * PlayerIndex  
 * Point  
 * Quaternion  
 * Ray  
 * Rectangle  
 * Vector2  
 * Vector3  
 * Vector4  

待实现：  

Microsoft.Xna.Framework  
 * TitleContainer  

Microsoft.Xna.Framework.Audio  
Microsoft.Xna.Framework.Content  
Microsoft.Xna.Framework.Design  
Microsoft.Xna.Framework.GamerServices  
Microsoft.Xna.Framework.Graphics  
Microsoft.Xna.Framework.Input  
Microsoft.Xna.Framework.Meida  
Microsoft.Xna.Framework.Net  
Microsoft.Xna.Framework.Storage  


## 温馨提示
我们使用了扩展名后缀为 .d.ts 的 TypeScript 定义文件来做智能提示和后期文档生成。  
所以您可以在 Visual Studio 、 VSCode 等支持 TypeScript 的编辑器上看到全中文的智能提示。  


## 特别注意
本项目因基于 JavaScript 语言实现，因存在浮点误差，还请不要在科学研究等严谨的环境下使用。  
另：由于 C# 语法与 JavaScript 拥有较大不同，虽然我们做了大量工作进行兼容，但差异依然存在。  


## 特别感谢
感谢 MonoGame 团队为我们的实现提供了非常丰富、标准的样本。  


## 扩展链接
[MSDN XNA4.0 文档](https://docs.microsoft.com/zh-cn/previous-versions/windows/xna)  
[MonoGame](https://github.com/MonoGame/MonoGame)  


## License（许可）
The XNA4JS project is under the [Microsoft Public License](https://opensource.org/licenses/MS-PL) except for a few portions of the code.  See the [LICENSE.txt](LICENSE.txt) file for more details.  Third-party libraries used by XNA4JS are under their own licenses.  Please refer to those libraries for details on the license they use.  

XNA4JS 项目使用 [Microsoft Public License](https://opensource.org/licenses/MS-PL) 许可（部分代码除外）。有关详细信息，请参阅 [LICENSE.txt](LICENSE.txt) 文件。XNA4JS 项目所使用的第三方库使用他们自己的许可。有关他们所使用许可的详细信息，请自行参阅这些库。  