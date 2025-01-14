<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6ffbbc648c8236b9c7d881acc96dcdd8
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Templatiq\\' => 10,
        ),
        'A' => 
        array (
            'Appsero\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Templatiq\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
        'Appsero\\' => 
        array (
            0 => __DIR__ . '/..' . '/appsero/client/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6ffbbc648c8236b9c7d881acc96dcdd8::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6ffbbc648c8236b9c7d881acc96dcdd8::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit6ffbbc648c8236b9c7d881acc96dcdd8::$classMap;

        }, null, ClassLoader::class);
    }
}
