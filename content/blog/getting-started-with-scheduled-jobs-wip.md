---
title: "Getting started with Scheduled Jobs - WIP "
date: 2021-01-08T05:17:02.492Z
description: Getting started with Scheduled Jobs - WIP
tags:
  - Episerver
type: Blog
---
> Brief Note: I'll be adding some hand-wavy comments to remove parts of the code that aren't related to scheduled jobs. The code is important, but its project specific. [Feedback is welcome](https://github.com/Nhawdge/nhawdge-netlify/issues/new).

## What are Scheduled Jobs?

A scheduled job is a handy tool accessible from the admin panel to run a task doing predefined actions. Normally you'll use these to maintain some part of your project without needing to be involved. This could simply be cleaning out the recycling bin on a scheduled interval, or emailing your admins a list of recent changes once a month.

Scheduled jobs do not need to be scheduled, and can be run on demand, for example indexing your Episerver Search and Navigation index.

## How do I use Scheduled Jobs?

When creating a scheduled job, you normally want to create them in their own folder, normally `Project/Business/ScheduledJobs/`. These do not need to interact with many other parts of the site code wise so it's okay to isolate them.

In order to make a scheduled job your class needs two key things:
* To inherit and implement `Episerver.Scheduler.ScheduledJobBase`
* A Scheduled Plugin Attribute with name `[ScheduledPlugIn(DisplayName = "Email Recent Change list to Admins")]`

We'll start by making a scheduled job to email admins about recent changes. The code below starts our scheduled job class. We've got the `ScheduledPlugIn` attribute with our display name, and we're inheriting from `ScheduledJobBase`.

As part of the inheritance, we're also overriding the `Execute` method.

```csharp
[ScheduledPlugIn(DisplayName = "Email Recent Change list to Admins")]
namespace MyProject.Business.ScheduledJobs
{
    public class ChangeListEmailerJob : EPiServer.Scheduler.ScheduledJobBase
    {
        public override string Execute()
        {
            throw new NotImplementedException();
        }
    }
}
```

Next step, we'll want to add 3 important features
* Some basic logging to our scheduled job
* A way to stop it, should the server need to shutdown, or the task be halted. 
* Final Log message for the history.

We'll start with adding a way to stop our scheduled job. 

```csharp
[ScheduledPlugIn(DisplayName = "Email Recent Change list to Admins")]
namespace MyProject.Business.ScheduledJobs
{
    public class ChangeListEmailerJob : EPiServer.Scheduler.ScheduledJobBase
    {
        public ChangeListEmailerJob()
        {
            IsStoppable = true;
        }
        public override string Execute()
        {
            throw new NotImplementedException();
        }
    }
}
```
