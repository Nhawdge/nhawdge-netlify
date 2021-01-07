---
title: Getting started with Episerver Display Channels
date: 2021-01-07T03:14:52.309Z
description: Getting started with Episerver Display Channels
tags:
  - Episerver Channels
  - Episerver
type: Blog
---
> Brief Note: I'll be adding some hand-wavy comments to remove parts of the code that aren't related to display channels. The code is important, but its project specific. [Feedback is welcome](https://github.com/Nhawdge/nhawdge-netlify/issues)


## What are Episerver Display Channels?

Display channels are a great way to take your content and modify the output in an alternate format, across the entire site or certain content types. This is a great way to implement [AMP pages](https://amp.dev/). Or provide an alternative view for mobile users or users with low bandwidth. This could also be used to have a PDF version of a page. In this example we'll use AMP pages.

## How do I use Episerver Display Channels?


### Create a DisplayChannel class
To begin you'll want to start by making your first display channel class. 

```csharp
using EPiServer.Web;
using System;
using System.Linq;
using System.Web;

namespace ExampleSite.Business.Channels
{
  public class AmpDisplayChannel: DisplayChannel
  {
  }
}

```

Next you'll need to add overrides found in `DisplayChannel`.

```csharp
using EPiServer.Web;
using System;
using System.Linq;
using System.Web;

namespace ExampleSite.Business.Channels
{
  public class AmpDisplayChannel: DisplayChannel
  {

    public override bool IsActive(HttpContextBase context) 
    {
      return // Check if user has 'amp' tag in their request.
    }
  
    public override string ChannelName => ProjectConstants.RenderingTags.Amp

  }
}

```

Now that have our display channel class, we can create a controller and register templates for the AMP specific pages.

### Create an Amp specific controller.

In order to get AMP pages to render a different template we must first make an alternate controller for our content. Since AMP pages are generally designed for content, and not full site experiences, we're only going to modify our `BlogPost` page type.

Here is our current `BlogPost` page type controller. This will serve up the view for the blog post page.

```csharp
namespace ExampleSite.Controllers.Pages
{
    [TemplateDescriptor(Inherited = true)]
    public class BlogPageController : PageController<BlogPostPage>
    {
        public ActionResult Index(BlogPostPage currentPage)
        {
            var model = new BlogPageViewModel() {
              currentPage = currentPage
            }
            return View("~/Views/Pages/BlogPost.cshtml", model);
        }
    }
}
```

Now we create a second controller that serves the AMP channel when a blog post is requested. The key difference is the template descriptor being specific to AMP pages, and the view page is for our AMP view pages.

```csharp
namespace GreatWesternBank.Controllers.Channels
{
    [TemplateDescriptor(Tags = new string[] { AmpChannel.Name })]
    public class AmpController : PageController<BlogPostPage>
    {
        public ActionResult Index(BlogPostPage currentPage)
        {
            var model = new BlogPageViewModel() {
              currentPage = currentPage
            }
            return View("~/Views/Pages/Amp/BlogPost.cshtml", model);
        }
    }
}
```

This will be sufficient to create a specific layout for blog post pages with an AMP view. The important pieces to this puzzle are:

* Make sure your IsActive function does not throw errors.
It is very easy to account for your "true" check while ignoring other possibilities. 
For example. With AMP pages, an early method of indiciating a page was an AMP page was to add on a GET parameter, `?amp=⚡`. If your `IsActive` checked for the presence of a GET parameter, it may need to parse through others, like GTM tags, or other possible referrer information. 
* Verify your AMP Page controller has the proper inheritance chain. 
Some times we get moving so fast we forget a `BlogPage` type accidentally inherits from a different abstract than our other page types.
* Make sure to frequently test your existing page types during development.
If there are issues with the template descriptors you may accidentally make a more specific version of another type of page and cause rendering issues along the way. 



## Extra notes on AMP pages. 

Make sure you're using a completely separate AMP ready layout. You can use the MVC's Layout property to reassign your view.

```csharp
@{ 
    Layout = "~/Path/To/Amp/View/Root.cshtml";
}
```

This will ensure your pages are valid AMP pages.