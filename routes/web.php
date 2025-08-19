<?php

use Illuminate\Support\Facades\Route;

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::statamic('/posts', 'posts.index', [ 'title' => 'Blog' ]);
