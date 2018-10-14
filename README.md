# XNA4JS
本项目的目标是 XNA Framework 4.0 到 JavaScript 的移植实现。  
XNA Framework 4.0 是微软基于 .Net 制作的一套跨平台游戏框架。  
本项目继承自 XNA 4.0 版本 API 及其部分实现衍生而来。  
您可简单方便的将原有基于 XNA 4.0 的游戏移植到本项目中运行，也可在本项目基础上重新开发属于您的游戏。  

The project's goal is to achieve transplantation of XNA Framework 4.0 to JavaScript.  
XNA Framework 4.0 is a cross-platform game framework made by Microsoft based on .Net.  
The project inherited from XNA 4.0 version of the API and its partial implementation.  
You can easily migrate your original XNA 4.0-based games to the project, or redevelop your game based on this project.  


## 当前进度(Current progress)

已实现(Implemented)：  

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

待实现(Pending)：  

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


## 温馨提示(Tips)
我们使用了扩展名后缀为 .d.ts 的 TypeScript 定义文件来做智能提示和后期文档生成。  
所以您可以在 Visual Studio 、 VSCode 等支持 TypeScript 的编辑器上看到全中文的智能提示。  

We used a TypeScript definition file with the extension suffix .d.ts for smart hints and document generation.  
So you can see the full Chinese smart prompts in Visual Studio, VSCode and other editors that support TypeScript.  


## 敬请注意(Attention)
本项目基于 JavaScript 语言实现，存在浮点误差，还请不要在科学研究等严谨的环境下使用。  
另：由于 C# 语法与 JavaScript 拥有较大不同，虽然我们做了大量工作进行兼容，但差异依然存在。  

This project is based on the JavaScript language and has floating point errors. Please do not use it in a rigorous environment such as scientific research.  
Another: Since the syntax of C # and JavaScript have quite different, although we have done a lot of work compatible, but differences remain.  


## 特别感谢(Thanks)
感谢 MonoGame 团队为我们的实现提供了非常丰富、标准的样本。  

Thanks to the MonoGame team for providing a very rich, standard sample for our implementation.  


## 扩展链接(Links)
[MSDN XNA4.0 文档(MSDN XNA4.0 Document)](https://docs.microsoft.com/zh-cn/previous-versions/windows/xna)  
[MonoGame](https://github.com/MonoGame/MonoGame)  


## 许可说明(License)
XNA4JS 项目使用 [Microsoft Public License](https://opensource.org/licenses/MS-PL) 许可（部分代码除外）。  
有关详细信息，请参阅 [LICENSE.txt](LICENSE.txt) 文件。  
XNA4JS 项目所使用的第三方库使用他们自己的许可。  
有关他们所使用许可的详细信息，请自行参阅这些库。  

The XNA4JS project is under the [Microsoft Public License](https://opensource.org/licenses/MS-PL) except for a few portions of the code.  
See the [LICENSE.txt](LICENSE.txt) file for more details.  
Third-party libraries used by XNA4JS are under their own licenses.  
Please refer to those libraries for details on the license they use.  