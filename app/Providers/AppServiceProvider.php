<?php

namespace App\Providers;

<<<<<<< HEAD
=======
use Illuminate\Support\Facades\Schema;
>>>>>>> 09b77e3d1bcfde887b18590447bdbd4f1df7751f
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
<<<<<<< HEAD
=======
        Schema::defaultStringLength(191);
>>>>>>> 09b77e3d1bcfde887b18590447bdbd4f1df7751f
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
